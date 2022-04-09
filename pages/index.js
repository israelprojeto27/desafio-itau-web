import Head from 'next/head'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function Home() {

  const [input, setInput] = useState('');   
  const [output, setOutput] = useState('');   

  
  function handleChange(event, field){
    if ( field === 'input'){
      setInput(event.currentTarget.value);
    } 
    else if ( field === 'output'){
      setOutput(event.currentTarget.value);
    }    
  }

  
  const handleSubmit = async () => {
    console.log('chamando a api');

    setOutput('Aguarde a resposta ...')

    const response = await fetch('https://desafio-itau-api.herokuapp.com/password/validate', {
      method: 'POST',
      body: JSON.stringify({ input }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log('Retorno API: '+  data)
    setOutput(data.toString())
  }

  return (
    <div className="container">
      <Head>
        <title>Desafio Itau Web</title>
        <link rel="icon" href="/icon_itau.png" />
      </Head>

      <main>
        <h1 className="title">
          Interface Web para a API Desafio Itau
        </h1>

        <br></br> <br></br> <br></br>

        <div className="grid">
          Digite um valor aqui e clique em Validar

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '95ch' },
            }}
            noValidate
            autoComplete="off"            
          >
            
            <div>
              <TextField
                id="outlined-required"
                label="Input"
                defaultValue=""
                value={input}
                onChange={(e) => handleChange(e, 'input')}
              />
            </div>

            <div>
              <p>Retorno API: &nbsp; &nbsp; {output} </p>
            </div>

            <br></br> <br></br>

            <div>
                <Button variant="contained" fullWidth="true" onClick={handleSubmit}>Validar</Button>
            </div>

          </Box>


        </div>
      </main>

      <footer>
        <p><black>Autor: Israel Barreto</black></p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
