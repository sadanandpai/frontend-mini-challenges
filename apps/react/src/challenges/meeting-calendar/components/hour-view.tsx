import classes from '../styles.module.scss';

interface Props {
  hours: string[];
}

export function HourView({ hours }: Props) {
  return (
    <div className={classes.hourLabels}>
      {hours.map((hour) => (
        <div key={hour} className={classes.hour}>
          <span key={hour}>{hour}</span>
        </div>
      ))}
    </div>
  );
}
