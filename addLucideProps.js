let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M7.05225 11.1997C7.05225 9.31409 7.05225 8.37128 7.63804 7.7855C8.22382 7.19971 9.16663 7.19971 11.0522 7.19971H13.0522C14.9378 7.19971 15.8806 7.19971 16.4664 7.7855C17.0522 8.37128 17.0522 9.31409 17.0522 11.1997V13.1997C17.0522 15.0853 17.0522 16.0281 16.4664 16.6139C15.8806 17.1997 14.9378 17.1997 13.0522 17.1997H11.0522C9.16663 17.1997 8.22382 17.1997 7.63804 16.6139C7.05225 16.0281 7.05225 15.0853 7.05225 13.1997V11.1997Z" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M13.0522 10.1997H11.0522C10.5 10.1997 10.0522 10.6474 10.0522 11.1997V13.1997C10.0522 13.752 10.5 14.1997 11.0522 14.1997H13.0522C13.6045 14.1997 14.0522 13.752 14.0522 13.1997V11.1997C14.0522 10.6474 13.6045 10.1997 13.0522 10.1997Z" fill="#4E4E4E"/>
  <path d="M10.0522 7.19971V4.19971" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M14.0522 7.19971V4.19971" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M17.0522 10.1997H20.0522" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M17.0522 14.1997H20.0522" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M10.0522 20.1997V17.1997" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M14.0522 20.1997V17.1997" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M4.05225 10.1997H7.05225" stroke="#4E4E4E" stroke-linecap="round"/>
  <path d="M4.05225 14.1997H7.05225" stroke="#4E4E4E" stroke-linecap="round"/>
</svg>`;

const addLucideProps = (name, svg) => {
  // Add {...props} inside the <svg> tag
  let modifiedSvg = svg.replace("<svg ", "<svg {...props} ");

  // Create the functional component string
  const fnWrapper = `
     ${name}: (props: LucideProps) => (
      ${modifiedSvg}
    ),
  `;

  return fnWrapper;
};

let res = addLucideProps("processor_generation", svg);

console.log(res);
