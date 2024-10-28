import React from 'react';
import LinkButtons from '../../../components/LinkButtons';
import PropTypes from 'prop-types';



const LinkButtonList = ({ handleLogin, setError, setLoading }) => (
    <>
        <LinkButtons platform="google" onClick={() => handleLogin('google', setError, setLoading)} />
        {/* <LinkButtons platform="facebook" onClick={() => handleLogin('facebook', setError)} /> */}
        <LinkButtons platform="github" onClick={() => handleLogin('github', setError, setLoading)} />
    </>
);

LinkButtonList.propTypes = {
    handleLogin: PropTypes.func,
    setError: PropTypes.func.isRequired,
};

export default LinkButtonList;
