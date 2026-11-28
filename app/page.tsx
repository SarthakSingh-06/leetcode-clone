import { UserButton } from '@clerk/nextjs';
import { ProtectedComponentProvider } from '@/components/providers/protected-component-provider';
import { onBoardUser } from '@/modules/auth/actions';

async function Home() {
  await onBoardUser();
  return (
    <ProtectedComponentProvider>
      <div>
        Home Page
        <UserButton />
      </div>
    </ProtectedComponentProvider>
  );
};

export default Home;
