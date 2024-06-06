const electronicsLink = document.getElementById('electronics-link');
const mainContent = document.getElementById('main-content');

electronicsLink.addEventListener('click', function(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Content from the PDF
  const electronicsContent = `
    <h1>Samsung 55-inch Crystal UHD 4K TV: A Comprehensive Review</h1>
    <h2>Introduction</h2>
    <p>Samsung is renowned globally for its cutting-edge technology and innovation in the television industry. As one of the leading TV manufacturers, Samsung consistently delivers high-quality products with superior picture quality, advanced features, and sleek designs. The company has a strong reputation for pushing the boundaries of display technology, including QLED and OLED panels, making it a top choice for consumers seeking premium viewing experiences.</p>
    <p>The Crystal UHD series by Samsung is celebrated for its exceptional value, offering 4K resolution and vibrant color reproduction at competitive prices. These TVs utilize Crystal Display technology to provide clearer, more vivid images, and are equipped with smart features powered by Tizen OS. The series is popular among consumers for its balance of affordability, performance, and advanced functionalities, making it an attractive option for a wide audience looking for quality 4K televisions without a premium price tag.</p>
    <h2>Key Features</h2>
    <h3>Display Quality</h3>
    <ul>
      <li>Crystal UHD 4K resolution for vivid and sharp picture quality.</li>
      <li>Dynamic Crystal Color technology for a broader spectrum of colors.</li>
      <li>HDR (High Dynamic Range) support for enhanced contrast and detail.</li>
    </ul>
    <h3>Performance</h3>
    <ul>
      <li>Crystal Processor 4K for smooth performance and upscaling of lower resolution content.</li>
      <li>Motion Accelerator for reduced blur in fast-moving scenes.</li>
      <li>Game Enhancer for a better gaming experience with reduced lag.</li>
    </ul>
    <h3>Smart TV Capabilities</h3>
    <ul>
      <li>Powered by Tizen OS for a user-friendly interface.</li>
      <li>Access to popular streaming services like Netflix, Amazon Prime, and Disney+.</li>
      <li>Samsung TV Plus for live TV without the need for additional subscriptions.</li>
    </ul>
    <h3>Design</h3>
    <ul>
      <li>Sleek and minimalist design.</li>
      <li>Thin bezels offering an immersive viewing experience.</li>
      <li>Smart cable management for a clutter-free setup.</li>
    </ul>
    <h3>Sound Quality</h3>
    <ul>
      <li>Dolby Digital Plus support for immersive audio.</li>
      <li>Adaptive Sound that adjusts based on the content being watched.</li>
    </ul>
    <h3>Connectivity Options</h3>
    <ul>
      <li>Multiple HDMI and USB ports.</li>
      <li>Bluetooth and Wi-Fi support for wireless connections.</li>
      <li>HDMI eARC for high-quality audio transmission to external sound systems.</li>
    </ul>
    <h3>Additional Features</h3>
    <ul>
      <li>Built-in voice assistants like Bixby, Alexa, and Google Assistant.</li>
      <li>Samsung SmartThings integration for controlling smart home devices.</li>
      <li>Ambient Mode to blend the TV into your home decor when not in use.</li>
    </ul>
    <h2>User Experience</h2>
    <p>Insights from user reviews highlighting ease of setup and user-friendly interface. Feedback on picture and sound quality from various users. Commonly praised aspects and any noted drawbacks.</p>
    <h2>Conclusion</h2>
    <p>Summary of the TV’s strengths and who it’s best suited for. Comparison with similar models in the same price range. Final thoughts and recommendation.</p>
  `;

  // Update main content with the extracted content
  mainContent.innerHTML = electronicsContent;
});

let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
    {
        searchform.classList.toggle('active');
    }

    let loginform = document.querySelector('.login-form');

    document.querySelector('#login-btn').onclick = () =>
      {
        loginform.classList.toggle('active');
      }





