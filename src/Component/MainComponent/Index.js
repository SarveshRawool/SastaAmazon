import ProductComponent from "../ProductComponent";
import SideNav from "../SideNav";

function MainComponent() {
    return ( 
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
                <SideNav></SideNav>
            </div>
            <div className="col-md-9">
                <ProductComponent></ProductComponent>
            </div>
            </div>
        </div>
        
        </>
     );
}

export default MainComponent;