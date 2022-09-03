const Layout = ({ children }) => {
  return (
    <section className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
