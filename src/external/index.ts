export async function login (
  username: string,
  password: string
): Promise<void> {
  if (username === 'diana' && password === 'letmein') {
    return
  } else {
    return new Promise((_, rej) => {
      setTimeout(rej, 1000, 'Unauthorized')
    })
  }
}
