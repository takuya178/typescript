const sha2561 = async (text: string) => {
  const uint8  = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  return Number(Array.from(new Uint8Array(digest)).map(v => v).join('')) % 10
}

sha2561('アクシステスト').then(hash => console.log(hash));