import { Routes,Route } from "react-router-dom";
import { Home,Cart } from "../pages";

export const AllRoutes = ({handleAdd, data, handleDelete}) => {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home handleAdd={handleAdd}/>} />
            <Route path="/cart" element={<Cart data={data} handleDelete={handleDelete}/>} />
        </Routes>
    </>
  )
}
