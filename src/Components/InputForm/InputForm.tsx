import { Grid, TextField,IconButton,Button } from "@material-ui/core";
import React from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

interface IFormInputs{
  title: string;
  body: string;
};

const schema = yup.object().shape({
  title: yup.string().required().max(40),
  body: yup.string().required().min(50).max(300),
});

function InputForm(props: { handleClose: () => void; }) {
  const {control, handleSubmit, formState: {errors}}: any = useForm<IFormInputs>({resolver: yupResolver(schema)});


 const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) =>{
  props.handleClose();
   console.log(data);
   
 }
  return <div>

    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
          
        <Grid item xs={12}>  
          <Controller name= "title" control={control} defaultValue="some title text" 
            render={({field}) =>(
            <TextField {...field} fullWidth label="Title" variant="outlined"  error={!!errors.title} helperText={errors.title ? errors.title?.message : ""} />
            )}
          />
        </Grid>
        <Grid item xs={12}>  
          <Controller name= "body" control={control} defaultValue="some body text" 
            render={({field}) =>(
            <TextField {...field} fullWidth multiline label="body" variant="outlined"  error={!!errors.body} helperText={errors.body ? errors.title?.message : ""} />
            )}
          />
        </Grid>
        <Grid item xs={12}>
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={(e) => console.log(e.target.files)}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
       
        {/* {errors.body && <span>body field is required</span>} */}
        <Grid item xs={12} style={{display:"flex"}} justifyContent="flex-end" ><Button type="submit" variant="contained" color="primary">Save</Button></Grid>
      </Grid>
    </form>
</div>;  
}

export default InputForm;
