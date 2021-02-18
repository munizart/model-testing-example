import React, { FC, FormEvent, useCallback, useState } from 'react'
import * as external from '../external'
export function Login () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = useCallback(
    (ev: FormEvent) => {
      setError('')
      setLoading(true)
      external
        .login(username, password)
        .then(() => {
          alert('logged in')
        })
        .catch(setError)
        .finally(() => setLoading(false))

      ev.preventDefault()
      window.document.querySelector('button')?.blur()
    },
    [password, username]
  )

  return (
    <div className='page'>
      <div className={`relative form ${error ? 'error-animation' : ''}`}>
        <div className={`transition ${loading ? 'fade' : ''}`}>
          <h1>Login</h1>
          <form
            onSubmit={login}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <Row>
                <label htmlFor='user'>user</label>
                <input
                  type='text'
                  value={username}
                  onChange={ev => setUsername(ev?.target?.value)}
                  id='user'
                />
              </Row>
              <Row>
                <label htmlFor='password'>password</label>
                <input
                  type='password'
                  value={password}
                  onChange={ev => setPassword(ev?.target?.value)}
                  id='password'
                />
              </Row>
            </div>
            <button type='submit'>login</button>
            {error ? (
              <span className='error'>{error}</span>
            ) : (
              <span className='error hide'>error</span>
            )}
          </form>
        </div>

        <div className={`loading-screen ${loading ? 'active' : ''}`}>
          <div className='loading-screen-bg' />
        </div>
      </div>
    </div>
  )
}

const Row: FC = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'capitalize'
    }}
    {...props}
  />
)
