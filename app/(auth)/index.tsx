import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import 'react-native-url-polyfill/auto';

import Login from '@/components/frm-login';

import { JwtPayload } from '@supabase/supabase-js';
import { Text, View } from 'react-native';

export default function Auth() {
    const [claims, setClaims] = useState<JwtPayload | null>(null)
    useEffect(() => {
        supabase.auth.getClaims().then(({ data }) => {
            if (data) {
                setClaims(claims)
            }
        })
        supabase.auth.onAuthStateChange(() => {
            supabase.auth.getClaims().then(({ data }) => {
                if (data) {
                    setClaims(claims)
                }
            })
        })
    }, [])
    return (
        <View>
            <Login></Login>
            {claims && <Text>{claims.sub}</Text>}
        </View>
    );
}

