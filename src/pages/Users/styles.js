import styled from 'styled-components'

export const Container = styled.div ` 
    background: rgba(255,255,255,0.4);
    display: flex;
    flex-direction: column;
    margin: 30px;
    padding: 20px;
    border-radius: 6px;

    h1{
        text-align: center;
    }
    p{
        text-align: center;
        font-weight: bold;
        
    }
    a{
        text-decoration: none;
        color: #7159c1;
    }
`
export const Group = styled.div ` 
    display: flex;
    justify-content: center;
    
    div{
        margin-right: 100px; 
           }

`