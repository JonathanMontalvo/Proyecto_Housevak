
const DescripCard=({id})=>
{
return(
<div className='container'>
<div className='detalle'>
    <img scr={id.imagen} alt={id.title}/>
</div>
</div>
)
}

export default DescripCard