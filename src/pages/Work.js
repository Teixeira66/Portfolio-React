import React, { Component } from 'react';
import Iframe from 'react-iframe';



class work extends Component{
   
    state = {
        isLoading: true
      }


    render() {
        return (
            <div>
<div className="examples1">
<p>Example 1</p>

 <Iframe title="Cabaret example" src="https://github.com/Teixeira66/cabaret-shop/blob/master/images1/34962503_1707300275973042_5419752534275260416_n.jpg" 
 width="800" 
 height="400"
 frameBorder="10px solid black"

 />
<p>add description</p>
</div>


<div className="examples2">
<p>Example 2</p>

<Iframe url="![image of barber shop products](https://github.com/Teixeira66/cabaret-shop/blob/master/images1/34962503_1707300275973042_5419752534275260416_n.jpg)
"
width="800" 
height="400"

padding="200px"
/>
<p>add description</p>
</div>

<div className="examples3">
<p>Example 3</p>
<img src="https://unsplash.it/800/400" alt="generate a random one every time the page is reloaded" />
<p>add description</p>
</div>

<div className="examples4">
<p>Example 4</p>
<img src="https://unsplash.it/800/400" alt="generate a random one every time the page is reloaded" />
<p>add description</p>
</div>

<div className="examples5">
<p>Example 5</p>
<img src="https://unsplash.it/800/400" alt="generate a random one every time the page is reloaded" />
<p>add description</p>
</div>
</div>
      )
    }
}

export default work;