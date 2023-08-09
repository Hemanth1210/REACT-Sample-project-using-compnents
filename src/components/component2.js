import React from "react";
import dodge from "./dodge.jpeg"
import mustang from "./mustang.jpeg"
import "./Component2.css"
function Component2(){
    return(
        <body>
        <h1>dodge challenger v/s mustang</h1>
        <table id="cars">
            <tr>
                <th>Image</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><img src={dodge}/></td>
                <td>The Dodge Challenger is the name of three different generations of automobiles (two of those being pony cars) produced by American automobile manufacturer Dodge. However, the first use of the Challenger name by Dodge was in 1959 for marketing a "value version" of the full-sized Coronet Silver Challenger.</td>

            </tr>
            <tr>
                <td><img src={mustang}/></td>
                <td>The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its seventh generation, it is the fifth-best selling Ford car nameplate.</td>
            </tr>
        </table>
<br></br>
    <h3>Dodge challenger srt engine 8</h3>
    <p>
        <ul>
            <li>The Chrysler Hemi engines, known by the trademark Hemi or HEMI, are a series of American V8 gasoline engines built by Chrysler with overhead valve hemispherical combustion chambers.</li>
            <li>Sequential, multipoint fuel injection with individual cylinder pressure and back pressure sensors</li>
            <li>Closed loop individual combustion and lambda control, twin ceramic ball bearing turbochargers with Koenigsegg response system</li>
            <li>1.7 bar boost pressure (2.2 bar with E85)</li>
            <li>Carbon fiber intake manifold with optimized intake tracts</li>
            <li>Tig-welded ceramic coated 0.8 mm wall thickness Inconel exhaust system manifold with merge collector</li>
            <li>Total engine weight: 189 kg</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ehwk6WkUDhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </p>
    <br></br>
    <h3>Mustang</h3>
    <p>
        <ul>
            <li>on all models, as well as an optional 2.3L EcoBoost turbocharged and direct injected four-cylinder engine. </li>
            <li>four turbochargers to generate a mighty 1500 horsepower and 1180 pound-feet of torque</li>
            <li>makes the dash from zero to 60 mph in a mere 2.3 seconds, and it has a top speed of 261 mph</li>
            <li>equipped with a slightly more potent version of the base powerplant, and it produces 1578 horsepower</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L8LXHc2RM8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </p>
        </body>
        
    )
}
export default Component2;
