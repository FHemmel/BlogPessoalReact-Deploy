import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from 'react-toastify'; 

function Navbar() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        
        toast.info ("Você saiu com sucesso! Volte sempre!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            progress: undefined,
            });
        navigate("/login")
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static" className='bg-nav'>
            <Toolbar variant="dense">
                <Box className='cursor, botaoNav'>
                    <Typography variant="h6" color="inherit">
                        Blog Pessoal
                    </Typography>
                </Box>

                <Box className="botoes">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography variant="h6" >
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioPostagem" className="text-decorator-none">
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Postagem
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor, botaoNav' onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;