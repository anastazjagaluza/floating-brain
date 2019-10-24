import { LitElement, html, css } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
export class FloatingBrain extends LitElement{
    static get properties(){
        return{
            fallBackText: {
                type: String,
            },
            skills: {
                type: Object,
            }

        }
    };
    static get styles(){
        return [
            css`
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
               
            }
            svg {
              transform: scale(.7);
              animation: popup .5s forwards ease-out, float 1s infinite alternate 1s;
           }

           @keyframes popup{
                0% {
transform: translateY(-50vw) scale(0.7);
                }
                100%{
                    opacity: 1;
                    transform: translateY(0) scale(0.7);
                }
                }

           @keyframes float{
               to{
                   transform: translateY(1rem) scale(.7);
               }
           }

           text:hover, tspan:hover{
            cursor: pointer;
           }

            .cls-1{fill:var(--skill1-background-color, #43CC5C);}
            .cls-1,.cls-3,.cls-4,.cls-5,.cls-7{stroke:#fff;}
            .cls-1,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-miterlimit:10;}
            .cls-2,.cls-6{fill:none;stroke:#1d1d1b;stroke-width:2px;}
            .cls-2{stroke-linecap:round;stroke-linejoin:round;}
            .cls-3{fill: var(--skill2-background-color, #FFBA75);}
            .cls-4{fill: var(--skill3-background-color, #28BCC1);}
            .cls-5{fill: var(--skill4-background-color, #DB354D);}
            .cls-7{fill:var(--skill5-background-color, #836D9B);}.cls-8{font-size:17px;}.cls-13,.cls-8{fill:#fff;font-family:var(--floating-brain-font-family, Verdana);}.cls-9{letter-spacing:-0.01em;}.cls-10{letter-spacing:-0.01em;}.cls-11{letter-spacing:0em;}.cls-12{letter-spacing:-0.01em;}.cls-13{font-size:19px;}.cls-14{letter-spacing:-0.01em;}.cls-15{letter-spacing:0em; font-size: 70%;}
            #shadow{
                width: 12rem;
                height: 1rem;
                border-radius: 50%;
                background-color: rgba(0,0,0, 0.6);
                align-self: center;
                animation: falling 1s forwards, grow 1s infinite alternate 1s;
            }
            @keyframes grow{
                to{
                    transform: scale(1.2);
                }
            }
            @keyframes falling {
                0%{
                    transform: scale(.1);
                }
                100%{
                    transform: scale(1);
                }
            }
            @media only screen and (max-width: 700px){
                #shadow{
                    width: 5rem;
                }
            }
            `
        ] 
    };
    constructor(){
        super();
        this.skills = {};
        this.fallBackText = "This is fallBack";
    }

    firstUpdated(){
        super.firstUpdated();
        let elements = this.shadowRoot.querySelectorAll("path, tspan, text");
        let arrayEl = Array.from(elements);
        let myEvents = "click touchstart mouseover".split(" ");
        arrayEl.forEach(el => {
          for(const oneEvent of myEvents){
          el.addEventListener(oneEvent, this.switchSkillSet.bind(this))}});

          arrayEl.forEach(el => {
         el.addEventListener("mouseout", e => {
        e.target.style.transform = "scale(1)";
        this.dispatchEvent(new CustomEvent('brainout', { bubbles: true, composed: true, detail: { text: () => this.fallBackText } }));
          })})
this.requestUpdate();
}
  
    switchSkillSet(e){
         let elementClasses = e.target.classList.value.split(" ");
         e.target.style.transform = "scale(1.02)";
         for(const oneClass of elementClasses){
           let thetext;
           for(const [key, value] of Object.entries(this.skills)){
               if(oneClass===key){
                   thetext = value;
               }
          this.dispatchEvent(new CustomEvent('brainevent', { bubbles: true, composed: true, detail: { text: () => thetext } }));
          }
};}
      
    
    render(){
        return html`
         <svg id="brain" viewBox="0 0 282.62 260.2">
          <path class="cls-1 ${Object.keys(this.skills)[0]}" d="M12.05,87.19c2.09,3.91,9.24,10.93,41.22,7l14.39-3.48S56.15,61.34,73.41,63.34s23,9,23,9-2.88,3-6.71,13,23,9,23,9l24.93-5-1.6-26s-2.24-18,1.62-19,20.14,11,25.88,0-6.74-29.85-17.26-26.86S136.05,2.76,136.05,2.76c-16.8,0-47.58,2.39-77.31,21.66C32.86,41.19,4.39,72.9,12.05,87.19Z" transform="translate(0 -0.99)"/>
          <path class="cls-2" d="M169.33,55.34" transform="translate(0 -0.99)"/>
          <path class="cls-2" d="M174,24.34" transform="translate(0 -0.99)"/>
          <path class="cls-3 ${Object.keys(this.skills)[1]}" d="M143.16,89.5l-1.6-26s-2.24-17.83,1.6-18.83,20.13,11,25.89,0-6.72-29.87-17.26-26.88S141.56,3.07,141.56,3.07l.9,1.83c1-.87,2.28-.46,5.93.13.3,0-9.3-1.51,16,1.5,6.74.81,10.11,1.21,11.28,1.38,2.68.38,12.24,1.86,27.61,7.54,19.1,7.06,33.37,12.33,46.56,26.08,2,2.08,3.92,4.54,7.8,9.44,10.21,12.94,26.28,33.3,21.8,39.11-1.08,1.4-2.84,1.19-8.58,1.25-28.26.27-39.78,1.1-40-1,0-.41.33-.69.66-1,4.4-4.56,4.23-22.11-7-27.85-11.5-5.9-26.51,4.82-27.34,13-.76,7.4,10.25,12.44,8.41,16.93-1.27,3.09-7.5,3.15-17.88,3-27.07-.43-40.67-1-44.17-6" transform="translate(0 -0.99)"/>
          <path class="cls-4 ${Object.keys(this.skills)[2]}" d="M11.64,91c2.09,3.9,9.24,10.92,41.23,7l14.38-3.49S55.79,65.11,73,67.11s23,9,23,9-2.87,3-6.71,13,23,9,23,9l24.93-5,2,.23L146.89,121c-2.19,1.78-5.39,3.72-9.11,3.49-6.25-.4-8.57-6.59-12.79-5.79s-6.49,7.58-7,12c-.79,7.7,3.37,16.09,9,18a10.4,10.4,0,0,0,7.35.17c13.43-4,12.47,5,12.47,5l-5.76,36.35-35.47-6.61-13.42,6.61s10.08,30.37-11.26,24.4-14.63-24.4-14.63-24.4l-30.68-6.61-24.4,7a47.44,47.44,0,0,1-7.69-12.3c-1.26-3-4.73-12.11-1.94-41.48C2,132.11,2.7,126,3.79,119l5.6-26.39,1.07-3.28Z" transform="translate(0 -0.99)"/>
          <path class="cls-5 ${Object.keys(this.skills)[3]}" d="M143.55,96.24l7.67,27.68-.94-.82c-2.19,1.78-5.38,3.72-9.1,3.49-6.25-.4-8.58-6.58-12.79-5.79s-6.5,7.58-6.95,12c-.79,7.7,3.37,16.1,9,18a10.45,10.45,0,0,0,7.35.16c13.42-4,12.46,5,12.46,5l-5.72,36.38,1.63-5.8c4.48,2.6,10.87,6.14,18.76,9.93,11.19,5.37,16.88,8.21,22.4,8.45,3.44.15,18.8.34,27.23-10.12,6.07-7.53,6.92-18.57,7.3-23.57.61-7.92-.78-11.61,1.92-14,3.7-3.19,9.15,1.29,18.75,1.44,13.11.2,23-7.84,25.09-9.65,11.29-9.68,13.22-23.11,14-28.5a54,54,0,0,0-3.18-27l-.64,1.82c-1.07,1.39-2.83,1.18-8.57,1.24-28.26.27-39.78,1.1-40-1,0-.41.33-.69.66-1,4.39-4.56,4.23-22.11-7-27.85-11.5-5.9-26.51,4.82-27.35,13-.76,7.4,10.26,12.44,8.42,16.93-1.27,3.09-7.51,3.15-17.88,3-27.07-.44-40.68-1-44.17-6" transform="translate(0 -0.99)"/>
          <path class="cls-6" d="M234.79,435.78" transform="translate(0 -0.99)"/>
          <path class="cls-2" d="M231.84,435.66" transform="translate(0 -0.99)"/>
          <path class="cls-7 ${Object.keys(this.skills)[4]}" d="M10.12,195.34a32.62,32.62,0,0,0,5.24,4.79c9,6.58,16.17,2.77,21.09,8,7,7.38,2.46,14.53,9.59,23.9,5.64,7.41,16.22,13.14,24.93,11,7-1.76,8.16-7.49,13.42-7,7.35.71,8.45,12.22,15.34,12.94,7.6.8,13.84-12.37,16.3-10.95s-5.33,14.56-1,19.92c4.22,5.16,19.73,3,25.89-6,4.91-7.15-.94-11.83,2.88-29.88,2.9-13.74,8-18.74,11.09-21.06a24,24,0,0,1,6.76-3.49c-7.89-3.79-14.28-7.33-18.76-9.93l-1.63,5.8.58.8-35.47-6.61-13.43,6.61s10.09,30.37-11.25,24.4-14.63-24.4-14.63-24.4l-30.68-6.61L12,194.64" transform="translate(0 -0.99)"/><path class="cls-2 ${Object.keys(this.skills)[0]}" d="M209.79,213.34" transform="translate(0 -0.99)"/><text class="cls-8" transform="translate(66 42.3)"><tspan class="cls-9 ${Object.keys(this.skills)[0]}">${Object.keys(this.skills)[0]}</tspan></text><text class="cls-8 ${Object.keys(this.skills)[0]}" transform="translate(186.11 52.15)"><tspan class="${Object.keys(this.skills)[1]}">${Object.keys(this.skills)[1]}</tspan></text><text class="cls-13 ${Object.keys(this.skills)[2]}" transform="translate(22.38 148.48)"><tspan class="${Object.keys(this.skills)[2]}">${Object.keys(this.skills)[2]}</tspan></text>
          <text class="cls-13 ${Object.keys(this.skills)[4]}" transform="translate(165.43 139.55)"><tspan class="cls-14 ${Object.keys(this.skills)[3]}">${Object.keys(this.skills)[3]}</tspan></text><text class="cls-13 ${Object.keys(this.skills)[4]}" transform="translate(61.55 230.89)">
              <tspan class="cls-15 ${Object.keys(this.skills)[4]}">${Object.keys(this.skills)[4]}</tspan></text>
        </svg> 
        <div id="shadow"></div>
    `;
    }
}
customElements.define("floating-brain", FloatingBrain);

export async function floatingBrain(data, fallBackText, placeholder, width="40vw", parent = document.body){
    const brain = await new FloatingBrain();
    brain.skills = data;
    brain.fallBackText = fallBackText;
    brain.style.width = width;
    const myEvents = "brainevent brainout".split(" ");
    myEvents.forEach(myEvent => {
  document.body.addEventListener(myEvent, e=> {
    placeholder.textContent = e.detail.text();
})})
    parent.appendChild(brain); 
    return brain;
}