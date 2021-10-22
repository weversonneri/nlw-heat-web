import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../services/api';

type User = {
  id: string,
  name: string,
  login: string,
  avatar_url: string
}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

type AuthProvider = {
  children: ReactNode;
}


type AuthResponse = {
  token: string,
  user: {
    id: string,
    name: string,
    login: string,
    avatar_url: string
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=b5645618483d873bf3cb';

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('/authenticate', {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@NLW-Heat:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@NLW-Heat:token');
  }

  useEffect(() => {
    const token = localStorage.getItem('@NLW-Heat:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('/profile').then(response => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      //change curr page url
      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
