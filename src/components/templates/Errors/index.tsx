import { useError } from '@/hooks';

const Errors = ({ errorCounter }) => {
  const { canvas } = useError(errorCounter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {canvas}
      <h3>Errors: {errorCounter}</h3>
    </div>
  );
};

export default Errors;
