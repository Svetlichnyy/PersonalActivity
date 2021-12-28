import * as React from 'react';
import Input from '@mui/material/Input';


  const MyInput = React.forwardRef((props , ref) => {
      return (
            <Input
                        ref={ref}
                        {...props}
                       style= {{width:'100%'}}
                       variant="outlined"
            />
    );
});
export default MyInput;