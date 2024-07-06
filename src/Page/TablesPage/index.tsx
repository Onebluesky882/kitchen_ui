const TablesPageLayout = ({ children }: React.PropsWithChildren) => {
  return <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>;
};

const TablesPage = () => {
  // const { tables } = useContext(GlobalContext);
  return (
    <TablesPageLayout>
      <div style={{ background: "gray" }}>
        <h2>TablesPage</h2>
      </div>
    </TablesPageLayout>
  );
};

export default TablesPage;
