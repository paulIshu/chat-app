import React, { useCallback, useState } from "react";
import { Icon, InputGroup ,Input, Alert } from "rsuite";

const EtidableInput = ({
  initialValue ,
  onSave,
  label = null,
  placeholder = 'write your value',
  emptymsg = 'input is empty',
  ...inputProps
  }) => {
  const [input, setInput] = useState(initialValue);
  const [isEditable, setisEditable] = useState(false);
  
  
  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  const onEditClick= useCallback(() => {
    setisEditable(p => !p);
    setInput(initialValue);
  }, [initialValue]);



  const onSaveClick = async () => {
    const trimmed = input.trim();
    if (trimmed === ''){
        Alert.info(emptymsg,4000)
        
    }    
    if(trimmed !== initialValue){
            await onSave(trimmed);

    }
    


        setisEditable(false);
    
  };
  return (
    <div>
      {label}
      <InputGroup>
      <Input
        {...inputProps}
        disabled={!isEditable}
        placeholder={placeholder}
        value={input}
        onChange={onInputChange}
      />
      <InputGroup.Button onClick={onEditClick}>
      <Icon icon = {isEditable ?'close':'edit2'}/>
      </InputGroup.Button>
      {
        isEditable&&(
            <InputGroup.Button onClick={onSaveClick}>
            <Icon icon ="check"/>
            </InputGroup.Button>
            
        )
      }
      </InputGroup>
    </div>
  );
};

export default EtidableInput;
