import React, { useEffect, useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

interface Props{
  children: React.ReactNode
}

export default function AuthProvider({children}: Props) { 
    const [redirectUri, setRedirectUri] = useState(process.env.NEXT_PUBLIC_APP_URL)

    useEffect(() => {
      setRedirectUri(window.location.origin)
    }, [])

    return <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
    authorizationParams={{
      redirect_uri: redirectUri
    }}
  >
    {children}
  </Auth0Provider>
};