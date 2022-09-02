import React from 'react'
import './styles.css'
const BULLION_PURCHASE = () => {
  return (
    <div>

        <h1 style={{ marginLeft:'45%'  , color:"red"}}>M U L J I S</h1>
        <h3 style={{ marginLeft:'46%'  , color:"red" }}>Jewellers		</h3>
        <h2 style={{ marginLeft:'38%' , color:"red"  }}>PURCHASE ORDER BULLION </h2>

<div class="row">
  <div class="column">
    <table>
      <tr>
        <th>TO SUPPLIER AUTO</th>
        <th> NAME</th>
        
      </tr>
      <tr>
        <td>SUPPLIER ID	</td>
        <td> DROPDOWN ADD NEW FUNCTION</td>
       
      </tr>
      <tr>
        <td>ADDRESS	</td>
        <td>AUTO</td>
       
      </tr>
      <tr>
        <td></td>
        <td></td>
      
      </tr>
      <tr>
        <td>EMAIL</td>
        <td>AUTO</td>
      
      </tr>
      <tr>
        <td>TEL</td>
        <td></td>
      
      </tr>  
    </table>
    <textarea style={{ border :'2px solid black' , margin:10}} placeholder='NOTES EDITABLE BOX ' rows="15" cols="60" >

</textarea  >
  </div>

  <div class="column">
    <table>
      <tr>
        <th>Date:DOC RAISED	</th>
        <th>AUTO</th>
    
     
      </tr>
      
      <tr>
        <td>DATE PO MADE</td>
        <td>MANUAL	</td>
        
      </tr>
      <tr>
        <td>Purchase Order Number</td>
        <td>AUTO</td>
 
      </tr>
      <tr>
        <td>DOC RAISED BY</td>
        <td>DROPDOWN</td>
 
      </tr>
      <tr>
        <td>API PRICE AT TIME OF ORDER</td>
        <td>MANUAL</td>
 
      </tr>
      <tr>
        <td>SPOT PRICE AGREED</td>
        <td>MANUAL</td>
 
      </tr>
      <tr>
        <td>SPOT PRICEAGREED WITH</td>
        <td>MANUAL</td>
 
      </tr> 
         <tr>
        <td>METHOD</td>
        <td>MANUAL</td>
 
      </tr>
      <tr>
        <td>METHOD</td>
        <td></td>
 
      </tr>
      <tr>
        <td>PAYMENT METHOD</td>
        <td>DROPDOWN</td>
 
      </tr>
      <tr>
        <td>PAYMENT DUE DATE</td>
        <td>manual calender</td>
 
      </tr>
 
    </table>
  
  </div>
  <textarea rows="33" cols="22" style={{float :'left' , border :'2px solid black', margin:30}} placeholder='NOTES EDIT BOX'  >

</textarea  >

</div>

<table style={{ marginBottom:50 }}>
  <tr style={{ backgroundColor:'pink'  }}>
    <th>OUR ITEM ID	</th>
    <th>QTY</th>
    <th>FINESS</th>
    <th>Description	</th>
    <th>EXPECTED PRICE</th>
    <th>UNIT PRICE AGREED</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>DROPDOWN</td>
    <td>MANUAL</td>
    <td>AUTO</td>
    <td> BULLION PURCHASE ORDER</td>
    <td> DERIVED FROM TABLE</td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
 
    
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td></td>
    <td>but based on spot price agreed </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
  <tr>
  
    <td></td>
    <td> </td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>

  <tr>
    <td>	</td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>

  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>

  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td>Total</td>
    <td >See formula</td>
  </tr>
</table>
<table style={{width:'100%'}}>
  <tr>
  <th>EXPECTED PRICE TOTAL</th>
    <th>CHECK TO DISCUS	</th>
    <th></th>
    <th></th>
    <th></th>
    <th>VAT INCLUDED 0% :</th>
    <th style={{ backgroundColor:'pink'  }}>£-</th>
  
  </tr>
  <tr>
  <td>AGREED PRICE TOTAL</td>
    <td>CHECK TO DISCUS	</td>
    <td> </td>
    <td></td>
    <td> DELIVERY</td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}>MANUAL</td>
    
  </tr>
  <tr>
  <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td>TOTAL: </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}>£-</td>
  
  </tr>
  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }} ></td>
  </tr>
  <tr>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td> </td>
    <td></td>
    <td style={{ backgroundColor:'pink'  }}></td>
  </tr>
</table>
<center><h1></h1>PLATINUM</center>
<center><h1></h1>GOLD</center>
<center><h1></h1>FINE DIAMONDS</center>




    </div>
  )
}

export default BULLION_PURCHASE