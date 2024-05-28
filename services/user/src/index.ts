import 'module-alias/register';
import config from 'config';
import { server } from '@app/app';

const PORT = config.get('port');
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
