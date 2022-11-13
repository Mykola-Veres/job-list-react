import { useLocation, useParams } from 'react-router-dom';
import { LinkStyled, TitleStyled } from './JobDetailed.styled';
// import ImageDummy from "../../images/ImageDummy.png";

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
      // console.log('benefitsList', benefitsList[1]);
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
              <p>Brutto, per year</p>
              <p>{item.salary}</p>
            </div>

            <div>
              <p>{DescriptionSplit()[1]}</p>
              <p>{DescriptionSplit()[3]}</p>
              <p>{DescriptionSplit()[4]}</p>
              <p>{DescriptionSplit()[6]}</p>

              <ul>
                {DescriptionBenefits().map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <button>Apply now</button>
          </article>
          <section>
            <h2>Attached images</h2>
            <img src="*" alt="r" />
          </section>
          <section>
            <p>Employment type</p>
            <ul></ul>
            <p>Benefits</p>
            <ul></ul>
          </section>
          <section>
            <h2>Contacts</h2>
            <div>map</div>
          </section>
        </>
      )}
    </>
  );
}
