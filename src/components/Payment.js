import React from 'react'

const Payment = () => {
  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">$138.99</p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="mt-auto text-lg font-bold">$238.99</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="date"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="number"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              for="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-blue-700 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
  )
}

export default Payment;