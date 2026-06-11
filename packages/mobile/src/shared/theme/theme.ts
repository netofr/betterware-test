export type AppTheme = {
  colors: {
    background: string;
    surface: string;
    text: string;
    textHeading: string;
    textMuted: string;
    border: string;
    accent: string;
    accentBackground: string;
    accentBorder: string;
    onAccent: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    brand: number;
    h1: number;
    h2: number;
    body: number;
    small: number;
    weights: {
      regular: '400';
      medium: '500';
      semibold: '600';
      bold: '700';
    };
  };
  borderRadius: {
    sm: number;
    md: number;
    full: number;
  };
};

export const lightTheme: AppTheme = {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    text: '#160d0b',
    textHeading: '#08060d',
    textMuted: '#6b7280',
    border: '#e5e4e7',
    accent: '#aa3bff',
    accentBackground: 'rgba(170, 59, 255, 0.1)',
    accentBorder: 'rgba(170, 59, 255, 0.5)',
    onAccent: '#ffffff',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    brand: 18,
    h1: 24,
    h2: 18,
    body: 14,
    small: 12,
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    full: 9999,
  },
};

export const darkTheme: AppTheme = {
  ...lightTheme,
  colors: {
    background: '#16171d',
    surface: '#16171d',
    text: '#9ca3af',
    textHeading: '#f3f4f6',
    textMuted: '#6b7280',
    border: '#2e303a',
    accent: '#c084fc',
    accentBackground: 'rgba(192, 132, 252, 0.15)',
    accentBorder: 'rgba(192, 132, 252, 0.5)',
    onAccent: '#ffffff',
  },
};
