import { useCallback, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '../../theme';

import { ToastContext } from './toast-context';

type ToastItem = {
  id: number;
  message: string;
};

const TOAST_DURATION_MS = 3000;

const ToastContainer = styled(SafeAreaView)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: flex-end;
  padding-horizontal: 16px;
  padding-bottom: 16px;
  gap: 8px;
  pointer-events: none;
`;

const Toast = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: 16px;
  padding-vertical: 12px;
  max-width: 100%;
`;

const ToastText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

export function ToastProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string) => {
    const id = Date.now();

    setToasts(current => [...current, { id, message }]);

    setTimeout(() => {
      setToasts(current => current.filter(toast => toast.id !== id));
    }, TOAST_DURATION_MS);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ThemeProvider theme={theme}>
        {children}
        <ToastContainer edges={['bottom']} accessibilityLiveRegion="polite">
          {toasts.map(toast => (
            <Toast key={toast.id}>
              <ToastText>{toast.message}</ToastText>
            </Toast>
          ))}
        </ToastContainer>
      </ThemeProvider>
    </ToastContext.Provider>
  );
}
