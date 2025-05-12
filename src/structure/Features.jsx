import Descriptions from '../components/Descriptions'

function Features() {

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Effective Task Management
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage projects and tasks efficiently in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Descriptions.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
