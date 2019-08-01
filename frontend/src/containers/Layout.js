/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { load } from 'store/connectIn/actions';
import { isLoggedIn } from 'store/connectIn/selectors';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ loggedIn, children, ...props }) => {
  React.useEffect(() => {
    if (loggedIn) {
      props.load();
    }
  });

  if (!loggedIn) {
    return children;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
});

const mapDispatchToProps = {
  load,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
