const Display = ({exp}) => {
    return ( 
        <div>
            {/* <div className="Display" style={{height:'30px', textAlign:'right'}}>
                <p>expression display</p>
            </div> */}

            <div className="Display">
                <p style={{margin:'0px 0px'}}>{ exp }</p>
            </div>
        </div>
     );
}
 
export default Display;