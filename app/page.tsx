import { UserButton } from '@clerk/nextjs'
import { ProtectedComponentProvider } from '@/components/providers/protected-component-provider';

async function Home() {
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
