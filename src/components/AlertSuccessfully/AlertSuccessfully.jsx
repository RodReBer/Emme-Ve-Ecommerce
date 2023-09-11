import { CheckCircleIcon } from "@heroicons/react/20/solid";

const AlertSuccessfully = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">Compra exitosa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSuccessfully;
