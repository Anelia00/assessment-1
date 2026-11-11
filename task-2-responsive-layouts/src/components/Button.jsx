import './Button.css'

// Reusable button for Search and Watch now
function Button({ children, className = '', ...props }) {
  return (
    <button className={`button ${className}`} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
