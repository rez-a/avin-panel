const tokenConfigs = (exp) => {
  return {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: Math.ceil((exp * 1000 - Date.now()) / 1000),
  };
};

export { tokenConfigs };
