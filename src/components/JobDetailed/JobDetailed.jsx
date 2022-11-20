import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { useLocation, useParams } from 'react-router-dom';
// import ImageDummy from "../../images/ImageDummy.png";
import { getNumberOfDays } from 'utils/countDay';

// type Item = {
//   address: string;
//   benefits: Array<string>;
//   createdAt: string;
//   description: string;
//   email: string;
//   employment_type: Array<string>;
//   id: string;
//   location: object;
//   name: string;
//   phone: string;
//   pictures: Array<string>;
//   salary: string;
//   title: string;
//   updatedAt: string;
// }

// interface Props {
//   item: Item
// }

// interface Props {
//   item: {
//     id: string,
//     name: string,
//     title: string,
//   };
// }

export default function JobDetailed({ item }) {
  const { movieId } = useParams();
  const locationCast = useLocation();

  console.log(item);

  function DescriptionSplit() {
    if (item) {
      const res = /\n/;
      const descriptionList = item.description.split(res);
      return descriptionList;
    }
  }

  function DescriptionBenefits() {
    if (item) {
      const res = /\t/;
      const benefitsList = item.description.split(res);
      const benefitsListItem = benefitsList[1].split('.');
      return benefitsListItem.slice(0, benefitsListItem.length - 1);
    }
  }

  return (
    <>
      <header>
        <h2>Job Details</h2>
        <div>
          <a href="*">Save to my list</a>
          <a href="*">Share</a>
        </div>
      </header>

      {item && (
        <>
          <article>
            <h3>{item.title}</h3>
            <div>
              <p>{item.salary}</p>
              <p>Brutto, per year</p>
            </div>
            <p>{`Posted ${getNumberOfDays(
              item.updatedAt,
              Date.now()
            )} days ago`}</p>
            <div>
              <p>{DescriptionSplit()[1]}</p>
              <p>{DescriptionSplit()[3]}</p>
              <p>{DescriptionSplit()[4]}</p>
              <p>{DescriptionSplit()[6]}</p>

              <ul>
                {DescriptionBenefits().map((items, index) => (
                  <li key={index}>
                    <p>{items}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button>Apply now</button>
          </article>
          <section>
            <h2>Attached images</h2>
            {item.pictures.map((img, index) => (
              <li key={index}>
                <img src={img} alt={`pictures ${item.name}`} />
              </li>
            ))}
          </section>
          <section>
            <p>Employment type</p>
            <ul>
              {item.employment_type.map((employee, index) => (
                <li key={index}>
                  <p>{employee}</p>
                </li>
              ))}
            </ul>
            <p>Benefits</p>
            <ul>
              {item.benefits.map((benefits, index) => (
                <li key={index}>
                  <p>{benefits}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Contacts</h2>
            <div>
              <GoogleMaps location={item.location} />
            </div>
          </section>
        </>
      )}
    </>
  );
}
