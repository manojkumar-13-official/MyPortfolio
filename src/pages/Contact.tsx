// import React, { useState } from 'react'
// import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     message: ''
//   })

//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
//   const [statusMessage, setStatusMessage] = useState('')

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const validateForm = () => {
//     if (!formData.username.trim()) {
//       setStatusMessage('Please enter your name')
//       return false
//     }
//     if (!formData.email.trim()) {
//       setStatusMessage('Please enter your email')
//       return false
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(formData.email)) {
//       setStatusMessage('Please enter a valid email address')
//       return false
//     }
//     if (!formData.message.trim()) {
//       setStatusMessage('Please enter your message')
//       return false
//     }
//     return true
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setStatus('loading')
//     setStatusMessage('')

//     if (!validateForm()) {
//       setStatus('error')
//       return
//     }

//     try {
//       // Send email to manojkumaratarumugam@gmail.com
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username: formData.username,
//           email: formData.email,
//           message: formData.message,
//           recipientEmail: 'manojkumaratarumugam@gmail.com'
//         })
//       })

//       if (response.ok) {
//         setStatus('success')
//         setStatusMessage('Message sent successfully! I will get back to you soon.')
//         setFormData({ username: '', email: '', message: '' })
//       } else {
//         setStatus('error')
//         setStatusMessage('Failed to send message. Please try again later.')
//       }
//     } catch (error) {
//       setStatus('error')
//       setStatusMessage('An error occurred. Please try again later.')
//       console.error('Error:', error)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center mt-5 mx-5 justify-center px-4 py-12 sm:py-16 md:py-20 relative">
//       <div className="w-full max-w-2xl">
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
//             Get in <span className="text-purple-600">Touch</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto">
//             Have a question or want to collaborate? Send me a message and I'll respond as soon as possible.
//           </p>
//         </div>

//         {/* Contact Form Container */}
//         <div className="bg-gray-950 border-2 border-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
//           <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//             {/* Username Field */}
//             <div>
//               <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
//                 <FiUser className="text-purple-600 text-lg sm:text-xl" />
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200"
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
//                 <FiMail className="text-purple-600 text-lg sm:text-xl" />
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email address"
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200"
//               />
//             </div>

//             {/* Message Field */}
//             <div>
//               <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
//                 <FiMessageSquare className="text-purple-600 text-lg sm:text-xl" />
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell me about your project or ask your question..."
//                 rows={5}
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200 resize-none"
//               />
//             </div>

//             {/* Status Message */}
//             {statusMessage && (
//               <div
//                 className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base font-medium text-center transition-all duration-300 ${
//                   status === 'success'
//                     ? 'bg-green-900 border-2 border-green-600 text-green-100'
//                     : status === 'error'
//                     ? 'bg-red-900 border-2 border-red-600 text-red-100'
//                     : 'bg-blue-900 border-2 border-blue-600 text-blue-100'
//                 }`}
//               >
//                 {statusMessage}
//               </div>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={status === 'loading'}
//               className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base border-2 border-purple-600 hover:border-purple-700"
//             >
//               <FiSend className="text-base sm:text-lg" />
//               {status === 'loading' ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t-2 border-gray-800">
//             <p className="text-gray-400 text-center text-xs sm:text-sm mb-3">Or reach out directly:</p>
//             <a
//               href="mailto:manojkumaratarumugam@gmail.com"
//               className="block text-center text-purple-400 hover:text-purple-300 font-semibold text-sm sm:text-base md:text-lg transition-colors duration-200"
//             >
//               manojkumaratarumugam@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


// d6566b9b-535d-46d0-a83d-c236478fd6fb


import React, { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // Web3Forms Access Key - Get from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = "d6566b9b-535d-46d0-a83d-c236478fd6fb"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.username.trim()) {
      setStatusMessage('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setStatusMessage('Please enter your email')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatusMessage('Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      setStatusMessage('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    if (!validateForm()) {
      setStatus('error')
      return
    }

    try {
      // Prepare form data for Web3Forms
      const formPayload = new FormData(event.currentTarget)
      
      // Add Web3Forms access key
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY)
      
      // Add redirect URL (optional)
      formPayload.append("redirect", window.location.href)
      
      // Convert to JSON
      const object = Object.fromEntries(formPayload)
      const json = JSON.stringify(object)

      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (response.success) {
        setStatus('success')
        setStatusMessage('Message sent successfully! I will get back to you soon.')
        setFormData({ username: '', email: '', message: '' })
        console.log("Success", response)
      } else {
        setStatus('error')
        setStatusMessage('Failed to send message. Please try again later.')
        console.error("Error", response)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('An error occurred. Please try again later.')
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center mt-5 mx-5 justify-center px-4 py-12 sm:py-16 md:py-20 relative">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Get in <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Have a question or want to collaborate? Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="bg-gray-950 border-2 border-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Username Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                <FiUser className="text-purple-600 text-lg sm:text-xl" />
                Full Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                <FiMail className="text-purple-600 text-lg sm:text-xl" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                <FiMessageSquare className="text-purple-600 text-lg sm:text-xl" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or ask your question..."
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-gray-700 text-white text-sm sm:text-base rounded-lg placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base font-medium text-center transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-900 border-2 border-green-600 text-green-100'
                    : status === 'error'
                    ? 'bg-red-900 border-2 border-red-600 text-red-100'
                    : 'bg-blue-900 border-2 border-blue-600 text-blue-100'
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base border-2 border-purple-600 hover:border-purple-700"
            >
              <FiSend className="text-base sm:text-lg" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t-2 border-gray-800">
            <p className="text-gray-400 text-center text-xs sm:text-sm mb-3">Or reach out directly:</p>
            <a
              href="mailto:manojkumaratarumugam@gmail.com"
              className="block text-center text-purple-400 hover:text-purple-300 font-semibold text-sm sm:text-base md:text-lg transition-colors duration-200"
            >
              manojkumaratarumugam@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact