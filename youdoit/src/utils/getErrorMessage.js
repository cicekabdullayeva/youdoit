const getErrorMessage = (error) => {
  const { response } = error;

  if (response) {
    const { data } = response;
    if (data) {
      const { error } = data;

      if (error) {
        const { message, code, fields } = error;
        return [`${message} (${code})`, code, message, fields];
      } else {
        return ["Network Error"];
      }
    } else {
      if (error.message === "Network Error") {
        return ["Şəbəkə ilə bağlı problem"];
      } else {
        return ["Bilinmeyen Xeta"];
      }
    }
  } else {
    return ["Şəbəkə ilə bağlı problem"];
  }
};

export { getErrorMessage };
