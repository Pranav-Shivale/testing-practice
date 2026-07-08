const ceaserCipher = (str, key) => {
  return str
    .split("")
    .map((char) => {
      if (checkAlphabet(char)) {
        let charCode = char.charCodeAt(0);
        let cipherCode = charCode + key;
        cipherCode = wrapCipherCode(cipherCode);
        return String.fromCharCode(cipherCode);
      } else {
        return char;
      }
    })
    .join("");
};

const wrapCipherCode = (cipherCode) => {
  if (cipherCode > 122) {
    const overflow = cipherCode - 122;
    return 96 + overflow;
  } else if (cipherCode > 90 && cipherCode < 97) {
    const overflow = cipherCode - 90;
    return 64 + overflow;
  }
  return cipherCode;
};

const checkAlphabet = (char) => {
  if (char.length !== 1) return false;
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
};

export { ceaserCipher };
