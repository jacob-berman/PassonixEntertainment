interface SocialParams {
    className: string;
    color: string
}


export function FacebookSVG({ className, color }: SocialParams){
    return(
        <svg className={className} viewBox="0 0 36 36"  xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M14.968 26.686v.063h4.177V18.206h2.744l.56-3.304h-3.304v-2.244c0-.936.25-1.87 1.746-1.87h1.559V7.731s-1.434-.187-2.744-.187c-2.743 0-4.738 1.808-4.738 4.8v2.62H12.1v3.304h2.868v8.417z" stroke="rgba(0,0,0,0)"></path>
            <circle opacity=".6" cx="18" cy="18" r="17.5" fill="none" stroke={color}></circle>
        </svg>
    )
}

export function TwitterSVG({ className, color }: SocialParams){
    return(
        <svg className={className} viewBox="0 0 36 36"  xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M15.003 25.556c7.225 0 11.174-5.985 11.174-11.174 0-.17 0-.344-.008-.505a8.032 8.032 0 001.961-2.037c-.7.309-1.457.522-2.256.62a3.933 3.933 0 001.728-2.174 7.964 7.964 0 01-2.492.952A3.908 3.908 0 0022.243 10a3.928 3.928 0 00-3.926 3.926c0 .308.032.611.107.897a11.144 11.144 0 01-8.097-4.105 3.93 3.93 0 00-.53 1.97c0 1.362.691 2.565 1.75 3.266a3.902 3.902 0 01-1.777-.488v.05a3.935 3.935 0 003.153 3.853 3.92 3.92 0 01-1.777.066 3.921 3.921 0 003.666 2.729A7.897 7.897 0 019 23.779a10.937 10.937 0 006.003 1.777z" stroke="rgba(0,0,0,0)"></path>
            <circle opacity=".6" cx="18" cy="18" r="17.5" fill="none" stroke={color}></circle>
        </svg>

    )
}