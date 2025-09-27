import { Person } from '../../types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const PersonLink = ({ person }: { person: Person }) => {
  const { personSlug } = useParams();

  return (
    <tr
      data-cy="person"
      key={person.slug}
      className={classNames({
        'has-background-warning': person.slug === personSlug,
      })}
    >
      <td>
        <Link
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
          to={`/people/${person.slug}`}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {person.mother ? (
          <Link
            className="has-text-danger"
            to={`/people/${person.mother.slug}`}
          >
            {person.motherName}
          </Link>
        ) : person.motherName ? (
          person.motherName
        ) : (
          '-'
        )}
      </td>

      <td>
        {person.father ? (
          <Link to={`/people/${person.father.slug}`}>{person.fatherName}</Link>
        ) : person.fatherName ? (
          person.fatherName
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};
