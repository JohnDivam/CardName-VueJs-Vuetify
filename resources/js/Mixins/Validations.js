
export const required = (value) =>
  !!value || "This field is required!";

export const name = (value) =>{
  if (value.trim().length==0) return true;
  if(value.trim().length > 20) return 'Max length is 20 characters'; 
}