import React from 'react';
import LinkButtons from '../../../components/LinkButtons';
import PropTypes from 'prop-types';



const LinkButtonList = ({ handleLogin, setError }) => (
    <>
        <LinkButtons platform="google" onClick={() => handleLogin('google', setError)} />
        {/* <LinkButtons platform="facebook" onClick={() => handleLogin('facebook', setError)} /> */}
        <LinkButtons platform="github" onClick={() => handleLogin('github', setError)} />
    </>
);

LinkButtonList.propTypes = {
    handleLogin: PropTypes.func,
    setError: PropTypes.func.isRequired,
};

export default LinkButtonList;
