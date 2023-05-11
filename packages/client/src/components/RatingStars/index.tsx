import RatingStar from 'components/icons/RatingStar';

type RatingStarsProps = {
  rating: number;
};

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <RatingStar
            key={index}
            filled={index < rating}
          />
        ))}
    </>
  );
}
