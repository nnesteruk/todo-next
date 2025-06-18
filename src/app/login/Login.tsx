import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8">
        <h1 className="mb-6 text-center text-2xl  ">Authorization</h1>
        <form className="flex flex-col gap-2.5">
          <div>
            <Label htmlFor="login">Email</Label>
            <Input id="login" type="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button
            type="submit"
            className="text-md font-bold hover:text-gray-600"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
