import React from 'react';
import { AuthProvider } from './auth/AuthContex';
import { ChatProvide } from './context/chat/ChatContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es')

export const ChatApp = () => {

    return (
        <ChatProvide>
            <AuthProvider>
                <SocketProvider >
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvide>
    )
}
