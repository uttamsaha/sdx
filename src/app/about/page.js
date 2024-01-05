import Service from '@/components/Service'
const page = () => {
    const services = [
        {
            img: "https://cdn2.vectorstock.com/i/1000x1000/62/11/cloud-computing-logo-design-icon-concept-vector-24016211.jpg",
            title: "Test tiele"
            
        }
    ]
  return (
    <div>
        {
            services.map((service, index) => <Service key={index} service={service}></Service>)
        }
    </div>
  )
}

export default page;