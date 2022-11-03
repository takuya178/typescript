const sha2561 = async (text: string) => {
  const uint8  = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  return Number(Array.from(new Uint8Array(digest)).map(v => v).join('')) % 10
}

// sha2561('アクシステスト').then(hash => console.log(hash));



// Input {'key1': 'value1', 'key2': [1,2,3], 'key3': (1,2,3)} Output True
// Input {`key1`: [`value1`, 'key2': [1,2,3], 'key3': (1,2,3)} Output Fale

const validate_format = (chars: string) => {
  const lookup = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  let stack: string[] = []
  const lookupKey = Object.keys(lookup);
  const lookupValue = Object.values(lookup);

  for (let i = 0; i < chars.length; i++) {
    if (lookupKey.includes(chars[i])) {
      switch (chars[i]) {
        case "{":
          stack.push(lookup["{"]);
          break;
        case "[":
          stack.push(lookup["["]);
          break;
        case "(":
          stack.push(lookup["("]);
          break;
      }
    }
    if (lookupValue.includes(chars[i])) {
      if (!stack.length) return false;
      if (chars[i] !== stack.pop()) return false;
    }
  }
  if (stack.length) return false;

  return true;
}

console.log(validate_format("{'key1': 'value1', 'key2': [1,2,3], 'key3': (1,2,3)}"));
