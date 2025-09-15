function App() {

  return(
    <div>
      <BrowserRouter>
        <nav>
          <link to={"/home"}>Home || </link>
          <link to={"/conditional"}>Conditional || </link>
          <link to={"/state"}>UseState || </link>
          <link to={"/props"}>Props || </link>
          <link to={"/local"}>local || </link>
        </nav>

        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Conditional' element={<Conditional isLoggedin={true}/>}/>
          <Route path='/state' element={<Stcomp/>}/>
          <Route path='/props' element={<Stcomp name={"value1"} messa={"value2"}/>}/>
          <Route path='/local' element={<LocalStorageDemo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}